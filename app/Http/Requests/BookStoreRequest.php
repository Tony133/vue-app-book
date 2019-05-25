<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'price' => 'required|integer'
        ];
    }
    
    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
	{
		return [
            'name.required' => 'Specifiy the name',
            'price.required' => 'Specifiy the price',
            'price.integer' => 'Specifiy the price integer'
        ];
	}
}
