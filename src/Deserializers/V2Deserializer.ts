import Data from "../Model/data";
import DeserializerBase from './DeserializerBase';

export default class V2Deserializer extends DeserializerBase{

    public Deserialize (msg: string): Data{
    
    for(var i = 0; i< msg.length; i++){
        if( msg[i] == '0'){
            if(msg[i-1] == '0' && msg[i+1] !='0'){
                var x = i;
                var fn = msg.substring(0,i+1);
                fn = fn.replace(/0/g,'');
                break;
            }
        }
    };

    for(var j = x+1; j<msg.length; j++){
        if( msg[j] == '0'){
            if(msg[j-1] == '0' && msg[j+1] !='0'){
                var y = j;
                var ln = msg.substring(x+1,j+1);
                ln = ln.replace(/0/g,'');
                break;
            }
        }
    }
    
    var client = msg.substring(y+1, msg.length);
    client = client.substring(0,3) +'-'+ client.substring(3,7);

        this.firstName = fn;
        this.lastName = ln;
        this.clientId = client;

        return this;       
    }
}