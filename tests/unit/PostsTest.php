<?php

namespace AdvancedPantheon\Tests\Unit;

use Lean\Models\Post;
use PHPUnit\Framework\TestCase;
use Brain\Monkey;
use Brain\Monkey\Functions;

class PostsTest extends TestCase {
	protected function setUp() {
		parent::setUp();
		Monkey\setUp();
	}

	protected function tearDown() {
		Monkey\tearDown();
		parent::tearDown();
	}

	public function test_if_post_is_rendered() {
		$get_post      = Functions\expect( 'get_post' );
		$get_permalink = Functions\expect( 'get_permalink' );
		$get_the_title = Functions\expect( 'get_the_title' );

		$post_id    = 1;
		$post_title = 'Post title';

		$get_permalink->with( $post_id )->andReturn( "//$post_id" );

		$mockedPost             = new \StdClass;
		$mockedPost->ID         = $post_id;
		$mockedPost->post_title = $post_title;

		$get_post->with( $post_id )->andReturn( $mockedPost );
		$get_the_title->with( $post_id )->andReturn( $mockedPost->post_title );

		$post = new Post( $post_id );

		$this->assertEquals( $post_title, $post->get_title() );
		$this->assertEquals( "//$post_id", $post->get_permalink() );
	}
}
