import axios from "axios";
import * as wjCore from '@grapecity/wijmo'
import * as wjGrid from '@grapecity/wijmo.grid'
import { CellMaker } from '@grapecity/wijmo.grid.cellmaker';

export interface IGetResponse {
    material_code: number,
    merchandise_name: string,
    manufacture_number: string,
    quantity: number,
    unit_number: number, 
    unitname: string,
    price: number,
    total: number,
    delivery_date: string,
    used_date: string,
    attached_count: number,
    remake: string,
    stickynote: string
}

export interface appDataType {
    data: any,
    lines: any
}

export async function getMaterial() {
    const appData: appDataType = {data: null, lines: null}
    const res = await axios.get<IGetResponse>('http://172.16.230.1:8080/material')

    // console.log(res.data)
    var detail = res.data
    appData.data = new wjCore.CollectionView(detail)
    appData.lines = [
        {
            header: '資材ヘッダ', colspan: 1, cells: [
                { binding: 'material_code', header: '資材CD'}
            ]
        },
        {
            header: '資材明細', colspan: 5, cells: [
                { binding: 'merchandise_name', header: '商品名'},
                { binding: 'quantity', header: '数量', colspan: 2, width: 140},
                { binding: 'price', header: '単価'},
                { binding: 'delivery_date', header: '希望納期'},
                { binding: 'manufacture_number', header: 'メーカー部品番号', width: 450},
                { binding: 'unit_number', header: '単位数', width:70},
                { binding: 'unit_name', header: '単位名', width:70}, 
                { binding: 'total', header: '金額'},
                { binding: 'used_date', header: '使用日'}
            ]
        },
        {
            header: '添付', colspan: 1, cells: [
                { binding: 'attached_count', header: '添付', cellTemplate: CellMaker.makeButton({
                    click: (e, etx) => {
                        alert('ボタンが押されました');
                    }
                }) , width:50}
            ]
        },
        {
            header: '資材詳細', colspan: 1, cells: [
                { binding: 'remake', header: '備考'},
                { binding: 'stickynote', header: '付箋', width:500}
            ]
        }
    ]
    console.log(appData)
    
    return appData        
    // appData.data = new wjCore.CollectionView(detail)
    // appData.lines = [
    //     {
    //         header: '資材ヘッダ', colspan: 1, cells: [
    //             { binding: 'materialCode', header: '資材CD'}
    //         ]
    //     },
    //     {
    //         header: '資材明細', colspan: 5, cells: [
    //             { binding: 'merchandiseName', header: '商品名'},
    //             { binding: 'quantity', header: '数量', colspan: 2, width: 140},
    //             { binding: 'price', header: '単価'},
    //             { binding: 'deliveryDate', header: '希望納期'},
    //             { binding: 'manufacturerNumber', header: 'メーカー希望納期', width: 450},
    //             { binding: 'unit.number', header: '単位数', width:70},
    //             { binding: 'unit.name', header: '単位名', width:70}, 
    //             { binding: 'total', header: '金額'},
    //             { binding: 'usedDate', header: '使用日'}
    //         ]
    //     },
    //     {
    //         header: '添付', colspan: 1, cells: [
    //             { binding: 'attachedCount', header: '添付', cellTemplate: CellMaker.makeButton({
    //                 click: (e, etx) => {
    //                     alert('ボタンが押されました');
    //                 }
    //             }) , width:50}
    //         ]
    //     },
    //     {
    //         header: '資材詳細', colspan: 1, cells: [
    //             { binding: 'remake', header: '備考'},
    //             { binding: 'stickynote', header: '付箋', width:500}
    //         ]
    //     }
    // ]

    // return appData
}