import FetchAllFromWeb from '../store/FetchFromWeb';
import ConfigData from '../config.json';
import { pagesActions, categoriesActions, tagsActions } from '../store/Store';

export const fetchPages = (baseUrl, dispatch) => {
    const getPagesHandler = async () => await FetchAllFromWeb(baseUrl + '/pages');
    getPagesHandler().then(data => {
        var pageIdsToBeExcluded = ConfigData.wp.pageIdsToBeExcluded?.split(',')?.map(pageId => parseInt(pageId));
        var filteredPages = data.filter(page => !pageIdsToBeExcluded.includes(page.id));
        
        dispatch(pagesActions.setPages(filteredPages));
    });
};

export const fetchCategories = (baseUrl, dispatch) => {      
    const getCategoriesHandler = async () => await FetchAllFromWeb(baseUrl + '/categories'); 
    getCategoriesHandler().then(data => dispatch(categoriesActions.setCategories(data)));
}

export const fetchTags = (baseUrl, dispatch) => {        
    const getTagsHandler = async () => await FetchAllFromWeb(baseUrl + '/tags'); 
    getTagsHandler().then(data => dispatch(tagsActions.setTags(data)));
}