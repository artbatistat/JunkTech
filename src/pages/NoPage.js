import PageFooter from "../layout/PageFooter";
import PageNavegation from "../layout/PageNavegation";




export default function NoPage(){
    return(
        <>
        <PageNavegation></PageNavegation>
        <br/><h1>No found page...</h1>
        <br/><h3>Sorry :(</h3>
        <PageFooter></PageFooter>
        </>
    )
}