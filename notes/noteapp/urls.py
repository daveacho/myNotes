from django.urls import path
from .views import get_note, note_detail, search_notes

urlpatterns = [
    path("notes/", get_note, name="get_note"),
    path("notes/<slug:slug>", note_detail, name="note_detail"),
    path("notes-search/",search_notes, name="search_notes")
]

#you get these error if you don't specific the query string(which is a key-value pair) in the url
# ValueError at /notes-search/
# Cannot use None as a query value
#http://127.0.0.1:8000/notes-search/?search=meeting