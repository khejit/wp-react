import store from '../store.jsx';

export function getTagById(id){
    let tags = store.getState().tagsState.tags;

    return tags.find(tag => {
        return tag.id === id
    });
}

export function getTagsFromTagsIds(tagsIds){
    return tagsIds.map(tagId => {
        return {
            id: tagId,
            name: getTagById(tagId).name
        }
    });
}

export function getPosts(){
    return store.getState().postsState.posts;
}

export function getPostById(id){
    let posts = getPosts();

    return posts.find(post => {
        return post.id === id
    })
}