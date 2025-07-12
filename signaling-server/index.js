/**
 * @file signaling-server/index.js
 * @summary Libp2p WebRTC signaling server.
 * @journal
 *   - 2025-07-12: Created the signaling server.
 *     - Listens on port 9090.
 */
'use strict'

const SignalingServer = require('@libp2p/webrtc-star-signalling-server')

const server = new SignalingServer({
  port: 9090,
  host: '0.0.0.0'
})

server.start((err) => {
  if (err) {
    throw err
  }
  console.log('Listening on %s:%s', server.info.host, server.info.port)
})