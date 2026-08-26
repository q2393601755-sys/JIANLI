using System;
using System.IO;
using System.Threading.Tasks;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Storage;
using Windows.Media.MediaProperties;
using Windows.Media.Transcoding;

public class VideoConverter
{
    static int Main(string[] args)
    {
        if (args.Length < 2)
        {
            Console.WriteLine("Usage: converter.exe <input> <output>");
            return 1;
        }

        string inputPath = args[0];
        string outputPath = args[1];

        try
        {
            var transcoder = new MediaTranscoder();
            var profile = MediaEncodingProfile.CreateMp4(VideoEncodingQuality.HD720p);

            var sourceFile = StorageFile.GetFileFromPathAsync(inputPath).AsTask().Result;
            Console.WriteLine("Source: " + sourceFile.Path);

            string outDir = Path.GetDirectoryName(outputPath);
            var destFolder = StorageFolder.GetFolderFromPathAsync(outDir).AsTask().Result;
            var destFile = destFolder.CreateFileAsync(Path.GetFileName(outputPath), CreationCollisionOption.ReplaceExisting).AsTask().Result;
            Console.WriteLine("Dest: " + destFile.Path);

            var prep = transcoder.PrepareFileTranscodeAsync(sourceFile, destFile, profile).AsTask().Result;
            Console.WriteLine("CanTranscode: " + prep.CanTranscode);
            Console.WriteLine("FailureReason: " + prep.FailureReason);

            if (!prep.CanTranscode)
            {
                Console.WriteLine("FAIL: Cannot transcode - " + prep.FailureReason);
                return 2;
            }

            Console.WriteLine("Transcoding...");
            prep.TranscodeAsync().AsTask().Wait();
            Console.WriteLine("SUCCESS");
            return 0;
        }
        catch (Exception ex)
        {
            Console.WriteLine("ERROR: " + ex.Message);
            Console.WriteLine(ex.ToString());
            return 3;
        }
    }
}
