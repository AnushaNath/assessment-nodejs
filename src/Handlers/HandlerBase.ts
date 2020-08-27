import Data from "../Model/data";

export default abstract class HandlerBase {
    public abstract Handle(text: string): Data;
}