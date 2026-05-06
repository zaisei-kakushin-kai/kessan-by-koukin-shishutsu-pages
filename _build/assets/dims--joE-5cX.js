function e(o){switch(o){case"tokyo":return{defaultDims:["局名","支払月"],amountCol:"支払額（円）",dateCol:"支払日",deptColCount:3,dims:[{col:"支払月",derived:!0,derivedFrom:"支払日"},{col:"局名"},{col:"部名"},{col:"課名"},{col:"会計名"},{col:"款名"},{col:"項名"},{col:"目名"},{col:"節・細節名"}]};case"kanagawa":return{defaultDims:["局名",`支払月
更訂確定月
戻入月`],amountCol:`支払額
更訂額
戻入額
(円)`,dateCol:`支払日
更訂確定日
戻入日`,deptColCount:2,dims:[{col:`支払月
更訂確定月
戻入月`,derived:!0,derivedFrom:`支払日
更訂確定日
戻入日`},{col:"局名"},{col:"所属名"},{col:"執行種類"},{col:"会計名"},{col:"款名"},{col:"項名"},{col:"目名"},{col:"節名"}]};case"mhlw":return{defaultDims:["支出官署","支払予定月"],amountCol:"支出決定額",dateCol:"支払予定日",deptColCount:2,dims:[{col:"支払予定月",derived:!0,derivedFrom:"支払予定日"},{col:"歳出組織名"},{col:"支出官署"},{col:"会計・勘定名"},{col:"項名"},{col:"目名"},{col:"費途別"},{col:"企業名"}]};case"adachi_ku":case"adachi-ku":return{defaultDims:["部","支払月"],amountCol:"支払額（円）",dateCol:"支払日",deptColCount:2,dims:[{col:"支払月",derived:!0,derivedFrom:"支払日"},{col:"部"},{col:"課"},{col:"会計"},{col:"款"},{col:"項"},{col:"目"},{col:"節"},{col:"細節"}]};default:return}}function c(o){return e(o)?.dims.filter(l=>!l.derived).map(l=>l.col)??[]}export{e as d,c as h};
