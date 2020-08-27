import Data from "../Model/data";

export default abstract class DeserializerBase implements Data {

    public firstName: string = "";
    public lastName: string = "";
    public clientId: string = "";

    public abstract Deserialize (msg: string) : Data;
}