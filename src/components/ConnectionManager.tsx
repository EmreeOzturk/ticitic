import { socket } from '../socket';

export function ConnectionManager() {
    function connect() {
        socket.connect();
    }

    function disconnect() {
        socket.disconnect();
    }

    return (
        <div className='flex text-white border-2 border-white p-4 gap-4'>
            <button className='border-blue-500 p-2 border-2 rounded-cl' onClick={connect}>Connect</button>
            <button className='border-blue-500 p-2 border-2 rounded-cl' onClick={disconnect}>Disconnect</button>
        </div>
    );
}