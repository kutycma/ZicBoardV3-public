<?php

namespace App\Protocols;

class Apex extends Tnetz
{
    public $flag = 'apex';
    public $flags = ['apex'];

    public function handle()
    {
        return $this->renderViaCore('apex');
    }
}