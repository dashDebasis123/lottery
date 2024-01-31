import { useWeb3Contract, useMoralis } from "react-moralis"
import { abi, contractAddresses } from "../constants"

export default function LotteryEntrance(){

    const {chainId} = useMoralis()
    const{runContractFunction: enterRaffle} = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddresses,
        functionName:,
        params:{},
        msgValue:
    })
    return <div>Hi from LotteryEntrance!!</div>
}