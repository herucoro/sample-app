import * as wjCore from '@grapecity/wijmo'
import * as wjGrid from '@grapecity/wijmo.grid'
import { CellMaker } from '@grapecity/wijmo.grid.cellmaker';
// import { appDataType } from './interfaces'

export type gridType = {
    materialCode: number,
    merchandiseName: string,
    manufacturerNumber: string,
    quantity: number,
    unit: {number: number, name: string},
    price: number,
    total: number,
    deliveryDate: string,
    usedDate: string,
    attachedCount: number,
    remake: string,
    stickynote: string
}

export interface appDataType {
    data: any,
    lines: any
}

export function getData() {
    const appData: appDataType = {data:'', lines:''}
    const detail: gridType[] = []

    for (let i = 0; i < 12; i++) {
        detail.push({
            materialCode: 61122000 + i,
            merchandiseName: '押釦_TWX0001_東西南北',
            manufacturerNumber: 'TWX0001_WESN',
            quantity: 1234,
            unit:{number: 1, name: '式'},
            price: 1234567.00,
            total: 1234567,
            deliveryDate: '21/09/11',
            usedDate: '21/09/11',
            attachedCount: 3,
            remake: '押釦の私用は添付ファイル参照',
            stickynote: '廃判になっており確認中'
        })
    }

    appData.data = new wjCore.CollectionView(detail)
    appData.lines = [
        {
            header: '資材ヘッダ', colspan: 1, cells: [
                { binding: 'materialCode', header: '資材CD'}
            ]
        },
        {
            header: '資材明細', colspan: 5, cells: [
                { binding: 'merchandiseName', header: '商品名'},
                { binding: 'quantity', header: '数量', colspan: 2, width: 140},
                { binding: 'price', header: '単価'},
                { binding: 'deliveryDate', header: '希望納期'},
                { binding: 'manufacturerNumber', header: 'メーカー希望納期', width: 450},
                { binding: 'unit.number', header: '単位数', width:70},
                { binding: 'unit.name', header: '単位名', width:70}, 
                { binding: 'total', header: '金額'},
                { binding: 'usedDate', header: '使用日'}
            ]
        },
        {
            header: '添付', colspan: 1, cells: [
                { binding: 'attachedCount', header: '添付', cellTemplate: CellMaker.makeButton({
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

    return appData
}