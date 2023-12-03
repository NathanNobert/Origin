import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { MetaTagConfig, MetaTagPage } from "../meta-tags/meta-tags-config";

@Injectable({
	providedIn: "root",
})
export class MetaService {
	//**************************************************
	//* Constructor
	//**************************************************

	//--------------------------------------------------
	constructor(private meta: Meta) {}

	//**************************************************
	//* Methods
	//**************************************************

	//--------------------------------------------------
	public setTags(pageKey: MetaTagPage) {
		const tags = MetaTagConfig[pageKey];
		if (tags) {
			this.meta.addTags(tags);
		}
	}
}
