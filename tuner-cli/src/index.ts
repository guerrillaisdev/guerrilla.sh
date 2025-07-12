/**
 * @file tuner-cli/src/index.ts
 * @summary Main entry point for the tuner CLI.
 * @journal
 *   - 2025-07-12: Created the initial CLI structure.
 *     - Added placeholder classes for the daemon and CLI.
 */
import { createLibp2p } from 'libp2p';
import { tcp } from '@libp2p/tcp'
import { mplex } from '@libp2p/mplex'
import { noise } from '@chainsafe/libp2p-noise'
import { webRTCStar } from '@libp2p/webrtc-star'
import { bootstrap } from '@libp2p/bootstrap'

class GuerrillaDaemon {
    node: any;

    constructor() {
        this.node = null;
    }

    async start() {
        const star = webRTCStar()
        this.node = await createLibp2p({
            addresses: {
                listen: [
                    '/ip4/127.0.0.1/tcp/0',
                    '/ip4/127.0.0.1/tcp/0/ws'
                ]
            },
            transports: [tcp(), star.transport],
            streamMuxers: [mplex()],
            connectionEncryption: [noise()],
            peerDiscovery: [
                star.discovery,
                bootstrap({
                    list: [
                        '/dnsaddr/p2p.guerrilla.sh/tcp/443/wss/p2p-webrtc-star'
                    ]
                })
            ]
        });
        await this.node.start();
        console.log(`Node started with id ${this.node.peerId.toString()}`);
    }
}

class GuerrillaCli {
    daemon: GuerrillaDaemon;

    constructor() {
        this.daemon = new GuerrillaDaemon();
    }

    async start() {
        await this.daemon.start();
    }
}

const cli = new GuerrillaCli();
cli.start();