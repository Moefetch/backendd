import Utility from "../../../Utility";
import { ILogicModel, INewAnimePic, ISettings } from "../../../../types";
import { BooruModelUtility } from "./UtilityForModels/Booru.ModelUtility";

const utility = new Utility();

export default class LogicModel implements ILogicModel {
    public supportedHostName: string = "danbooru.donmai.us";
    
    public booruModelUtility: BooruModelUtility;
    constructor(settings: ISettings) {
        this.booruModelUtility = new BooruModelUtility(settings, utility)
        this.process = this.process.bind(this)
    }
    
    public async process(url: string):Promise<INewAnimePic> {
        if (url.includes('/post')) {
            const resultantData = (await this.booruModelUtility.processBooru(url, 
               'danbooru')) ?? { data: {}, indexer: 0, imagesDataArray: []};
            return resultantData
        } else if (url.includes('/pools')) {
            
        }
        return { data: {}, indexer: 0, imagesDataArray: []}
    }
}
