const RTM = require('satori-sdk-js')

const isBusStop = scannerid => {
  return scannerid === '090ef701-5fb6-428c-bf1a-2dfcc26df812'
}

const isBus = scannerid => {
  return scannerid === '090ef701-5fb6-428c-bf1a-2dfcc26df812' // <-- TODO Change it
}

const rtm = new RTM('wss://rv6bqxdr.api.satori.com', 'cCab773fCDc1c38CbCDE0d243DAA2FEe')
let globalResponse = 0

const scannerBuckets = {}


// create a new subscription with 'your-channel' name
const channel = rtm.subscribe(
  'timed-devices',
  RTM.SubscriptionMode.SIMPLE,
  {
    filter: 'SELECT * FROM `timed-devices` WHERE `type` = "detect"'
  }
)

// add channel data handlers
const process = msg => {
  const { scannerid, address, time } = msg
  if (!(scannerid in scannerBuckets)) {
    scannerBuckets[scannerid] = {}
  }

  scannerBuckets[scannerid][address] = time
}


// channel receives any published message
channel.on('rtm/subscription/data', function(pdu) {
  globalResponse += 1
  pdu.body.messages.forEach(msg => {
    console.log(`Response: ${globalResponse} - ${JSON.stringify(msg)}`)

    process(msg)
  })
})

// client receives any PDU and PDU is passed as a parameter
rtm.on('data', function(pdu) {
  if (pdu.action.endsWith('/error')) {
    rtm.restart()
  }
})

countForBusStop = bucket => {
  const now = Date.now()

  return Object
    .keys(bucket)
    .map(address => {
      const time = bucket[address]

      const elapsed = now - time

      if (elapsed > 1 * 60 * 1000) {  // More than 1 min
        return 0
      }

      return 1
    })
    .reduce((prev, item) => prev + item, 0)
}

countScanners = () => {
  Object.keys(scannerBuckets).forEach(scannerid => {
    if (isBusStop(scannerid)) {
      const count = countForBusStop(scannerBuckets[scannerid])
      console.log(`BUCKET ${scannerid} count: ${count}`)
      rtm.publish('timed-devices', {type: 'count', scannerid, count});
    } else {
      console.log('NOT BUS')
    }
  })
}

// start the client
setInterval(countScanners, 1000)

rtm.start()
