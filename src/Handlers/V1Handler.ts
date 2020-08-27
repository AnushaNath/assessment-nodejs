import HandlerBase from "./HandlerBase";
import Data from "../Model/data";
import V1Deserializer from "../Deserializers/V1Deserializer";

export default class V1Handler extends HandlerBase{
    public Handle(text: string): Data {

        const v1Deserializer: V1Deserializer = new V1Deserializer();
        v1Deserializer.Deserialize(text);
        return v1Deserializer.Deserialize(text);
    }
}