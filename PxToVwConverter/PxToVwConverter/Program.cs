using System.Globalization;
using System.Text;

public class Program {
    public static void Main(string[] args)
    {
        StringBuilder stringBuilder = new StringBuilder();
        foreach (var line in File.ReadAllLines(args[0]))
        {
            if (line.EndsWith("px;") && !line.Contains("outline"))
            {
                var value = line.Split(": ")[1].Split("px;")[0];
                float val = float.Parse(value);
                stringBuilder.AppendLine(line.Replace(value + "px", val / 390 * 100 + "vw"));
            }
            else
            {
                stringBuilder.AppendLine(line);
            }
        }

        File.WriteAllText(args[0] + ".txt", stringBuilder.ToString());
    }
}