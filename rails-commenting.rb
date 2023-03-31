# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Purpose: Creates a controller class, named Blog Posts, which is a subclass of ApplicationController.
# Functionality: The controller defines methods for interacting with the model. This controller provides access to the BlogPost model. Each new connection to the server initializes objects from this class to process requests.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # Purpose: Performs a query on the BlogPost model to pull all elements and stores the result as a local variable/param @posts.
    # Functionality: This is implemented in the index method. The routes.rb file typically routes GET requests on the server to this function on the controller. A view page performing that request gains access to the local variable and can define further interactions with or views of the data for the user.
    @posts = BlogPost.all
  end

  # ---3)
  # Purpose: Defines a method for showing a blog post.
  # Functionality: The routes.rb typically calls this method with a GET request, providing the :id via params. This allows the user to view the selected blog post from the model.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # Purpose: Defines a method for creating a new post.
  # Functionality: The routes.rb typically calls this method with a GET request to provide the user with a view for a form, allowing them to input the params needed for creating a new record in the model.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Purpose: Creates a new post using the provided params and stores it in a local variable.
    # Functionality: Usually called during POST calls to the server, the user can provide JSON formatted params in accordance with the API to provide the necessary :title and :content for the creation of a new element in the model.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # Purpose: Performs a query on the model to pull the record via id and saves that record as a local variable.
    # Functionality: The edit method is typically used to create a view for editing a record. The id is passed to the edit call via params from the route, and the returned post can be used by the view for additional processing and rendering.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Purpose: Updates the selected blog post with the private blog post params.
    # Functionality: After pulling a specific blog post (above), this line takes that local variable and calls the update method, passing new values through the params provided to the server in the PATCH call. The params are a JSON formatted object with :title and :content available.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # Purpose: Redirects the user to a view called blog posts.
      # Functionality: In this instance, the redirect is called when destroying/deleting a post was successful. This provides the user with feedback that the operation was successful. A seperate view for Blog Posts defines what the user will now see, typically a listing of all blogs or an interface for searching through the blog posts.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # Purpose: Makes everything below this private.
  # Functionality: We want to prevent unathorized changes to data and methods from external attacks. The private keyword ensures that calls to these data and methods can only be made from within an object. This provides strict limitations for interacting with them.
  private
  def blog_post_params
    # ---10)
    # Purpose: Define params that can be accepted by the model/server when processing user requests to interact with the model.
    # Functionality: In this example, the Blog Post model can interact with :title and :content through params. These are available for server requests via JSON-formatted objects, eg {title: 'string', content: 'string'}, allowing the user to create new content or modify existing content through RESTful routes and the available methods.
    params.require(:blog_post).permit(:title, :content)
  end
end
