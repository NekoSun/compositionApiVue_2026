import { defineStore } from 'pinia'
import type { Post } from '@/types/Post';
import { useRoute } from 'vue-router';


interface CounterState {
    posts: Post[]
    post: Partial<Post>
    isLoading: boolean
    error: string | null
}

export const usePostStore = defineStore('posts', {
    state: (): CounterState => ({
        posts: [],
        post: {},
        isLoading: false,
        error: null,
    }),
    getters: {},
    actions: {
        getPosts() {
            fetch('http://localhost:3000/posts', {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(res => {
                    return res.json()
                })
                .then((data) => {
                    this.posts = data

                })
                .catch()
                .finally()
        },
        getPost() {
            fetch(`http://localhost:3000/posts/${useRoute().params.id}`, {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(res => {
                    return res.json()
                })
                .then((data) => {
                    this.post = data;
                })
                .catch()
                .finally()
        },
        postDelete(past: Post) {
            fetch(`http://localhost:3000/posts/${past.id}`, {
                method: 'DELETE'
            })
                .then(() => {
                    this.posts = this.posts.filter((postItem: Post) => postItem !== past);
                })
        },

        async updatePost() {
            await fetch(`http://localhost:3000/posts/${this.post.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...this.post }),
            })
                .then((res) => {
                    if (!res.ok) {
                        this.isLoading = false
                        return false;
                    }
                    this.isLoading = true
                    return true;
                })
                .catch(error => {
                    console.error(error)
                    this.isLoading = false
                })
        },
        async storePost() {
            await fetch('http://localhost:3000/posts', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...this.post }),
            },)
                .then((res) => {
                    if (!res.ok) {
                        this.isLoading = false
                        return false;
                    }
                    this.isLoading = true
                    return true;

                })
                .catch(error => {
                    console.error(error)
                    this.isLoading = false
                })
        }
    },
})