export function ConnectionState({ isConnected }: { isConnected: boolean }) {
    return <p className="text-white text-7xl ">State: {'' + isConnected}</p>;
}