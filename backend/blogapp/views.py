from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Blog
from .serializers import BlogSerializer
# Create your views here.
class BlogView(APIView):
    def get(self,request,format=None):
        blogs=Blog.objects.all()
        serializer=BlogSerializer(blogs,many=True)
        return Response(serializer.data)
    def post(self,request,format=None):
        
        serializers=BlogSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data,status=status.HTTP_201_CREATED)
        return Response(serializers.errors,status=status.HTTP_400_BAD_REQUEST)
        
        
    
        
