const net = require('net');

const server = net.createServer((socket) => {
    let isFirstMessage = true;

    socket.on('data', (data) => {
        if (isFirstMessage) {
            
            const imei = Buffer.from(data.slice(2)).toString('ascii');  
            console.log(`IMEI: ${imei}`);
            isFirstMessage = false;
        } else {
            
            const dataStr = data.toString('hex');
            console.log(`Received data: ${dataStr}`);

           
        }
    });

    socket.on('end', () => {
        console.log('Connection ended');
    });

    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});
const adresse="127.0.0.1";
const port = 9000; 
server.listen(port,adresse, () => {
    console.log(`Server listening on port ${port}`);
});
