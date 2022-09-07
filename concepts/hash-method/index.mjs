import { methodSelectorFromString} from './hash.mjs'
const main = async(arg) => {
    switch(arg[0]){
     case "methodSelector":
        console.log(methodSelectorFromString(arg[1]));
        break;
     case "block":
        break;
     default:
        console.log("Incorrect Command")
    }
}

main(process.argv.slice(2));
