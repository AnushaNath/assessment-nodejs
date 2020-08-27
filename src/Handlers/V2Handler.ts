import HandlerBase from "./HandlerBase";
import Data from "../Model/data";
import V2Deserializer from "../Deserializers/V2Deserializer";

export default class V1Handler extends HandlerBase{
    public Handle(text: string): Data {

        const v2Deserializer: V2Deserializer = new V2Deserializer();
        v2Deserializer.Deserialize(text);
        return v2Deserializer.Deserialize(text);
    }
}