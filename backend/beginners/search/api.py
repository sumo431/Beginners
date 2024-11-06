from ninja import NinjaAPI
from .models import Post
from .schemas import PostSchema, CreatePostSchema, SuccessResponseSchema
from django.http import JsonResponse

api = NinjaAPI()

# Fetch all posts
@api.get("/posts", response=list[PostSchema])
def get_posts(request):
    posts = Post.objects.all()
    return posts

# Create a new post
@api.post("/posts", response=PostSchema)
def create_post(request, post: CreatePostSchema):
    new_post = Post.objects.create(
        title=post.title,
        content=post.content
    )
    return PostSchema.from_orm(new_post)  # Return the newly created post as PostSchema

# Delete a post
@api.delete("/posts/{post_id}", response=SuccessResponseSchema)
def delete_post(request, post_id: int):
    try:
        post = Post.objects.get(id=post_id)
        post.delete()
        return SuccessResponseSchema(message="Post deleted successfully!")
    except Post.DoesNotExist:
        return SuccessResponseSchema(message="Post not found.")
