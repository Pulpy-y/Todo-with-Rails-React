require 'test_helper'

class Api::V1::TodoListsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_todo_lists_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_todo_lists_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_todo_lists_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_todo_lists_destroy_url
    assert_response :success
  end

  test "should get edit" do
    get api_v1_todo_lists_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_todo_lists_update_url
    assert_response :success
  end

end
