#!/usr/bin/env python

# from scapy.all import * 
# import socket

import SocketServer

class RequestHandler( SocketServer.StreamRequestHandler ):		#request handler class for the SocketServer --> inherit from StreamRequestHandler
    def handle(self):											#overwrite handle function of super
        input= self.request.recv(1024)
        print "Data: " + input

server = SocketServer.TCPServer( ("",8502), RequestHandler )
print "Starting Server"
server.serve_forever()





# previous attempts, not needed, but keeping it to mess around with at some point


# sock = socket.socket()
# host = socket.gethostname()
# port = 8502
# sock.bind((host, port))
# sock.listen(1)


# a = sniff(count=1, filter='tcp and host 192.168.0.2 and port 8502')

# clientIP = a[0][IP].src

# clientPort = a[0].sport
# seqNr = a[0].seq
# ackNr = a[0].seq + 1


# ip = IP(src="192.168.0.2", dst=str(clientIP))

# TCPSynAck = TCP(sport=8502, dport=clientPort, flags="SA", seq=seqNr, ack=ackNr, options=[('MSS', 1460)])

# answer = sr1(ip/TCPSynAck)




# sock.close()



