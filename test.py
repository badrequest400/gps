from scapy.all import * 
import socket


sock = socket.socket()
host = socket.gethostname()
port = 8502
sock.bind((host, port))
sock.listen(1)


a = sniff(count=1, filter='tcp and host 192.168.1.98 and port 8502')

clientIP = a[0][IP].src

clientPort = a[0].sport
seqNr = a[0].seq
ackNr = a[0].seq + 1


ip = IP(src="192.168.1.98", dst=str(clientIP))

TCPSynAck = TCP(sport=8502, dport=clientPort, flags="SA", seq=seqNr, ack=ackNr, options=[('MSS', 1460)])

answer = sr1(ip/TCPSynAck)

sock.close()