from django.http import JsonResponse


def testrun_view(request):
    data = {"message": "This is the testrun view."}
    return JsonResponse(data)
