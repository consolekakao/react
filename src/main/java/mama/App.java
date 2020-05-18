package mama;
import java.io.IOException;
        import java.util.ArrayList;
        import java.util.Iterator;
        import org.jsoup.Jsoup;
        import org.jsoup.nodes.Document;
        import org.jsoup.nodes.Element;
        import org.jsoup.select.Elements;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        String url = "https://news.naver.com/"; //크롤링할 url지정
        Document doc = null;        //Document에는 페이지의 전체 소스가 저장된다

        try {
            doc = Jsoup.connect(url).get();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println();
        System.out.println("============================================================");
        Elements title = doc.select("ul.section_list_ranking li a");
        System.out.println(title);
        String a = title.attr("title");
        String text = title.text();
        System.out.println(a);
        
    }
}



   

