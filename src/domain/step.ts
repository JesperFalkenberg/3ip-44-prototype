import {Desc} from './desc'
import {Impact} from './impact'

export class Step{

    constructor(
        private name: string,
        private num: number,
        private desc: Desc,
        private impact: Impact,
    ){}
}