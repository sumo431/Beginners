from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Beginners Search API. Please use /api/docs for API documentation.")