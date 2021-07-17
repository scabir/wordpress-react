import {createSlice, configureStore} from '@reduxjs/toolkit';

const categoriesInitialState = {
    categories: []
};

const tagsInitialState = {
    tags: []
}

const pagesInitialState = {
    pages: []
}

const searchInitialState = {
    searchTerm: ''
};

const categoriesSlice = createSlice({
    name:'categories',
    initialState: categoriesInitialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action
        }
    }   
});

const tagsSlice = createSlice({
    name:'tags',
    initialState: tagsInitialState,
    reducers: {
        setTags(state, action) {
            state.tags = action
        }
    }   
});

const pagesSlice = createSlice({
    name:'pages',
    initialState: pagesInitialState,
    reducers: {
        setPages(state, action) {
            state.pages = action
        }
    }   
});

const searchTermSlice = createSlice({
    name:'searchTerm',
    initialState: searchInitialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action
        }
    }  
});

const store = configureStore({
    reducer:  {
        categories: categoriesSlice.reducer,
        tags: tagsSlice.reducer,
        pages: pagesSlice.reducer,
        searchTerm: searchTermSlice.reducer
    } 
});

export const categoriesActions = categoriesSlice.actions;
export const tagsActions = tagsSlice.actions;
export const pagesActions = pagesSlice.actions;
export const searchTermActions = searchTermSlice.actions;
export default store;