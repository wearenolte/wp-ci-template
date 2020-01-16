<?php

namespace AdvancedPantheon\Tests\Unit;

use Lean\Models\Post;
use Lean\Models\User;
use PHPUnit\Framework\TestCase;
use Brain\Monkey;
use Brain\Monkey\Functions;

class TestPosts extends TestCase
{
    protected function setUp()
    {
        parent::setUp();
    }

    protected function tearDown()
    {
        Monkey\tearDown();
        parent::tearDown();
    }

    public function test_if_post_is_rendered()
    {

        $get_post = Functions\expect('get_post');

        $get_permalink = Functions\expect('get_permalink');

        $postID = 1;

        $get_permalink->with($postID)->andReturn("//$postID");

        $mockedPost = new \StdClass;
        $mockedPost->ID = $postID;
        $mockedPost->post_title = 'Post title';

        $get_post->with($postID)->andReturn($mockedPost);

        $post = new Post(1);

        $this->assertEquals(1, $post->format_data()['post_id']);
        $this->assertEquals('Post title', $post->format_data()['title']);
        $this->assertEquals('//1', $post->format_data()['permalink']);
    }

}
