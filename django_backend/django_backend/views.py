import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt  # Disable CSRF for testing purposes (not recommended in production)
def handle_registration(request):
    if request.method == 'POST':
        try:
            # Log the request body
            print(f"Received POST data: {request.body}")

            # Parse JSON data
            data = json.loads(request.body)
            print(f"Parsed data: {data}")

            return JsonResponse({'message': 'POST received successfully!'}, status=200)
        except Exception as e:
            print(f"Error: {e}")
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)
