export default function Page({params}){
    return(
<div>
    <h1> my page url: {params.slug[0] } / {params.slug[1]} / {params.slug[2]}</h1>
</div>
    );
}