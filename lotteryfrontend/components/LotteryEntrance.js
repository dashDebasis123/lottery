import { useWeb3Contract, useMoralis } from "react-moralis"
import { abi, contractAddresses } from "../constants"

export default function LotteryEntrance(){

    const {chainId: chainIdHex} = useMoralis()
    console.log(parseInt(chainIdHex))
    const chainId = parseInt(chainIdHex)
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    // const{runContractFunction: enterRaffle} = useWeb3Contract({
    //     abi: abi,
    //     contractAddress: contractAddresses[][0],
    //     functionName:"enterRaffle",
    //     params:{},
    //     msgValue:
    // })
    return <div>Hi from LotteryEntrance!!</div>
}