import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    addPost(res: any, createPostDTO: CreatePostDTO): Promise<any>;
    getPost(res: any, postID: any): Promise<any>;
    getPosts(res: any): Promise<any>;
    editPost(res: any, postID: any, createPostDTO: CreatePostDTO): Promise<any>;
    deletePost(res: any, postID: any): Promise<any>;
}
