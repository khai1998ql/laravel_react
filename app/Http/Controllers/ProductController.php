<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product = Product::all();
//        foreach ($product as $item){
//            dd($item['id']);
//        }
//        dd($product);
        return response()->json($product);
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
        $request->validate([
            'product_name' => 'required',
            'product_price' => 'required',
            'product_qty' => 'required',
            'product_status' => 'required'
        ]);
        $data = [];
        $dt = Carbon::now('Asia/Ho_Chi_Minh');
        $data['product_name'] = $request->product_name;
        $data['product_price'] = intval($request->product_price);
        $data['product_qty'] = intval($request->product_qty);
        $data['product_status'] = ($request->product_status == true) ? 1 : 0;
        $data['created_at'] = $dt->toDateTimeString();
        $id = Product::insertGetId($data);
        $data['id'] = $id;
        return response()->json(array(
            'message' => 'Tạo mới sản phẩm thành công!',
            'product' => $data
        ));


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
//        dd($product);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $id = intval($id);
        $product = Product::find($id);
        // $product = Product::where('id', $id)->first();
        if($product){
            $request->validate([
                'product_name' => 'required',
                'product_price' => 'required',
                'product_qty' => 'required',
                'product_status' => 'required'
            ]);
            $dt = Carbon::now('Asia/Ho_Chi_Minh');
            $product->product_name = $request->product_name;
            $product->product_price = $request->product_price;
            $product->product_qty = $request->product_qty;
            $product->product_status = $request->product_status;
            $product->updated_at = $dt->toDateTimeString();
            $product->save();
            return response()->json(array(
                'alert' => true,
                'message' => 'Cập nhật sản phẩm thành công!',
                'product' => $product
            ));
        }else{
            return response()->json(array(
                'alert' => false,
                'message' => 'Cập nhật sản phẩm thất bại!',
            ));
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $id = intval($id);
        $product = Product::find($id);
        if(!empty($product)){
            $product->delete();
            return response()->json([
                'alert' => true,
                'message' => 'Xóa sản phẩm thành công!',
                'id' => $id,
                'product' => $product
            ]);
        }else{
            return response()->json(array(
                'alert' => false,
                'message' => 'Xóa sản phẩm thất bại!',
                'id' => 0
            ));
        }


    }

    public function updateStatus($id){
        $id = intval($id);
        $product = Product::find($id);
        if($product){
            $product->product_status = ($product->product_status == 1) ? 0 : 1;
            $product->save();
            return response()->json(array(
                'alert' => true,
                'message' => 'Cập nhật trạng thái sản phẩm thành công!',
                'id' => $id,
                'product' => $product
            ));
        }else{
            return response()->json(array(
                'alert' => false,
                'message' => 'Cập nhật trạng thái sản phẩm thất bại!'
            ));
        }
        
    }
}
