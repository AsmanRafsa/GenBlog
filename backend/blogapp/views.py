from .serializers import CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.shortcuts import render
from rest_framework import status,viewsets,permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from .models import Blog
from .serializers import BlogSerializer,UserSerializer
# Create your views here.
#  All blogs
class BlogView(APIView):
    def get(self,request,format=None):
        # Getting from the data base
        blogs=Blog.objects.all()
        # Converting to JSON
        serializer=BlogSerializer(blogs,many=True)
        return Response(serializer.data)
    def post(self,request,format=None):
        serializers=BlogSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data,status=status.HTTP_201_CREATED)
        return Response(serializers.errors,status=status.HTTP_400_BAD_REQUEST)
    
    #Single blog
class SingleBlogView(APIView):
    def get_single_blog(self,id):
        try:
            return Blog.objects.get(id=id)
        except Blog.DoesNotExist:
            raise Http404
        
    # Getting a single blog
    def get(self, request, id ):
        blog = self.get_single_blog(id)
        serializer =BlogSerializer(blog)
        return Response(serializer.data)
    # updating a single blog
    def put(self,request,id):
        blog=self.get_single_blog(id)
        serializer=BlogSerializer(blog,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    #Deleting a single blog
    def delete(self,request,id):
        blog=self.get_single_blog(id)
        blog.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class UserView(APIView):    
    permission_classes=(permissions.AllowAny,)
    authentication_classes=()
    
    def post(self,request,format='json'):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HHTP_400_BAD_REQUEST)     
    
class CustomTokenObtainView(TokenObtainPairView):
    serializer_class=CustomTokenObtainPairSerializer
    
        

        
               
        
        
        
        
        
    
        
