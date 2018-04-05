@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Dashboard</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success">
                                {{ session('status') }}
                            </div>
                        @endif

                        <div class="wrapper">
                            Please Log your Suger Level:
                            <form action="post">
                                <input type="datetime-local" name="when">
                                <input type="number" name="sugarLevelLog" min="0" max="3000">
                                <input type="submit" value="submit">
                            </form>
                        </div>
                    </div>
                </div>

                <div class="card card-default" style="margin: 30px auto auto auto">
                    <div class="card-header">Logs</div>

                    <div class="card-body" style="overflow-y: scroll; max-height: 400px">
                        @foreach ($logs as $log)
                            <p>
                                <b style="color: green;">{{ $log->created_at }}</b>
                                <span style="color: red;font-size: 20px;font-weight: bold">{{ $log->sugarLevel }}</span>
                            </p>
                        @endforeach
                    </div>
                </div>

                <div class="card card-default" style="margin: 30px auto auto auto">
                    <div class="card-header">Chart</div>

                    <div class="card-body" style="">
                        <div style="width:75%;">
                            {!! $chart->render() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
