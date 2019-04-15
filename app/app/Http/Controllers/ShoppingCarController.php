<?php

namespace App\Http\Controllers;

use App\shoppingCar;
use Illuminate\Http\Request;

class ShoppingCarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shoppingCars = shoppingCar::get();
        echo json_encode($shoppingCars);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\shoppingCar  $shoppingCar
     * @return \Illuminate\Http\Response
     */
    public function show(shoppingCar $shoppingCar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\shoppingCar  $shoppingCar
     * @return \Illuminate\Http\Response
     */
    public function edit(shoppingCar $shoppingCar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\shoppingCar  $shoppingCar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, shoppingCar $shoppingCar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\shoppingCar  $shoppingCar
     * @return \Illuminate\Http\Response
     */
    public function destroy(shoppingCar $shoppingCar)
    {
        //
    }
}
