using Reactive.Bindings;
using System.Reactive.Linq;

namespace BlazorVanta.Models;

public class MyClock : IDisposable
{
    public MyClock()
    {
        CurrentDateTime = Observable
            .Interval(TimeSpan.FromMilliseconds(1000))
            .Select(_ => DateTime.Now)
            .ToReadOnlyReactivePropertySlim(DateTime.Now);
    }

    public ReadOnlyReactivePropertySlim<DateTime> CurrentDateTime { get; }

    public void Dispose()
    {
        CurrentDateTime.Dispose();
    }
}
