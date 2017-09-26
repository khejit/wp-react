import store from '../store.jsx';

export function getTagById(id){
    let tags = store.getState().tagsState.tags;

    return tags.find(tag => {
        return tag.id === id
    });
}