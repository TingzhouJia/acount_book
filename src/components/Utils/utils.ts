//支出列表
export const outgoingList:listType=[
    {icon:'icon-utility',title:'utility'},{icon:'icon-trip',title:'trip'},
    {icon:'icon-cloth',title:'cloth'},{icon:'icon-transport',title:'transport'},
    {icon:'icon-entertainment',title:'entertainment'},{icon:'icon-study',title:'study'},
    {icon:'icon-daily',title:'daily'},{icon:'icon-social',title:'social'},
    {icon:'icon-food',title:'food'}
]
type listType={
    icon: string;
    title: string;
}[]
//收入列表
export const incomeList: listType=[
    {icon:'icon-parttime',title:'part-time'},{icon:'icon-invest',title:'investment'},
    {icon:'icon-salary',title:'salary'}
]