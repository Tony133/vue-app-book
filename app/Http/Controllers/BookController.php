<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookStoreRequest;
use App\Http\Requests\BookUpdateRequest;
use App\Book;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();

        return response()->json($books);
    }

    public function store(BookStoreRequest $request)
    {
        try {
            $book = new Book([
                'name' => $request->get('name'),
                'price' => $request->get('price')
            ]);
            $book->save();
        } catch(\Exception $e) {
            return response()->json('Error: Book not created!'. $e);
        }

        return response()->json('Successfully book added');
    }

    public function edit($id)
    {
        $book = Book::find($id);

        return response()->json($book);
    }

    public function update(BookUpdateRequest $request, $id)
    {
        try {
            $book = Book::find($id);
            $book->name = $request->get('name');
            $book->price = $request->get('price');
            $book->save();
        } catch(\Exception $e) {
            return response()->json('Error: Book not updated!'. $e);
        }

        return response()->json('Successfully book updated');
    }

    public function destroy($id)
    {
        $book = Book::find($id);
        $book->delete();

        return response()->json('Successfully book deleted');
    }
}
